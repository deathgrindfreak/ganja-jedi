(ns ganja-jedi.models.db
  (:require [clojure.java.jdbc :as jdbc]
            [environ.core :refer [env]]
            [clojure.string :as str]
            [ganja-jedi.util.time :as tutil]
            [ganja-jedi.routes.auth :as auth]))

;;; The environmental variable "DATABASE_URL" must be set with the postgresql url
(def ^:dynamic *db-url* (env :database-url))


;;; Table creation

(defn create-users-table
  "Creates the users table"
  [db-spec]
  (jdbc/db-do-commands db-spec
                       (jdbc/create-table-ddl :users
                                              [:userid "SERIAL PRIMARY KEY"]
                                              [:enabled "BOOLEAN"]
                                              [:admin "BOOLEAN"]
                                              [:email "TEXT"]
                                              [:village "TEXT"]
                                              [:elder "BOOLEAN"]
                                              [:coleader "BOOLEAN"]
                                              [:leader "BOOLEAN"]
                                              [:salt "CHAR(60)"]
                                              [:password "CHAR(60)"])))

(defn create-auth-tokens-table
  "Creates the auth_tokens table"
  [db-spec]
  (jdbc/db-do-commands db-spec
                       (jdbc/create-table-ddl :auth_tokens
                                              [:tokenid "SERIAL PRIMARY KEY"]
                                              [:selector "CHAR(12)"]
                                              [:token "CHAR(64)"]
                                              [:userid "SERIAL"]
                                              [:expires "DATE"])))

(defn create-news-table
  "Creates the news table"
  [db-spec]
  (jdbc/db-do-commands db-spec
                       (jdbc/create-table-ddl :news
                                              [:newsid "SERIAL PRIMARY KEY"]
                                              [:author "text"]
                                              [:title "text"]
                                              [:body "text"]
                                              [:date "DATE"])))

(defn create-tables
  "Creates all tables"
  []
  (jdbc/with-db-transaction [db-con *db-url*]
    (create-users-table db-con)
    (create-auth-tokens-table db-con)))

;;; Login

(defn get-user-info
  "Retrieves the user info based on user email"
  [email]
  (jdbc/query *db-url* ["SELECT * FROM users WHERE email=?" (str/trim email)]))


;;; Register page

(defn register-user
  "Inserts a new user"
  [user-map]
  (let [[salt pass] (auth/gen-pass-hash (:password user-map))
        new-user-map (assoc user-map :password pass :salt salt)]
    (jdbc/insert! *db-url* :users new-user-map)))


;;; News items

(defn save-news
  "Inserts a new news item"
  [news-map]
  (let [timestamp (tutil/format-sql-timestamp (:date news-map))]
    (jdbc/insert! *db-url* :news (assoc news-map :date timestamp))))
