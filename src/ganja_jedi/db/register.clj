(ns ganja-jedi.db.register
  (:require [clojure.java.jdbc :as jdbc]
            [environ.core :refer [env]]))

(def db-url (env :database-url))

(defn register-user
  "Inserts a new user"
  [user-map]
  (jdbc/insert! db-url :users user-map))
