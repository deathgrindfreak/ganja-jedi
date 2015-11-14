(ns ganja-jedi.util.time
  (:require [clj-time.format :as timef]
            [clj-time.coerce :as timec]))

(def ^:dynamic *time-format* "MMMMM, d yyyy")

(defn format-sql-timestamp
  "Formats a sql timestamp"
  [time]
  (->> time
       (timef/parse (timef/formatter *time-format*))
       timec/to-timestamp))

(defn get-sql-string
  "Returns a string representation of a sql timestamp"
  [time]
  (->> time
       timec/from-sql-date
       (timef/unparse (timef/formatter *time-format*))))
