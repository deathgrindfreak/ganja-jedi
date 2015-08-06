(ns ganja-jedi.util.time
  (:require [clj-time.format :as timef]
            [clj-time.coerce :as timec]))

;;; EEE MMM dd HH:mm:ss Z yyyy
(defn format-sql-timestamp
  "Formats a sql timestamp"
  [time]
  (->> time
       (timef/parse (timef/formatter "MMMMM, d yyyy"))
       timec/to-timestamp))
