(ns ganja-jedi.models.db
  (:require [clojure.java.jdbc :as jdbc]
            [environ.core :refer [env]]))

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

(defn create-tables
  "Creates all tables"
  []
  (let [table-funs [create-users-table
                    create-auth-tokens-table]]
    (jdbc/with-db-connection [db-con *db-url*]
      (map #(% db-con) table-funs))))


;;; Register page

(defn register-user
  "Inserts a new user"
  [db-spec user-map]
  (jdbc/insert! db-spec :users user-map))
