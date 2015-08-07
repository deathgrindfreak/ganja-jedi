(ns ganja-jedi.routes.news
  (:require [clojure.string :as str]
            [compojure.core :refer [defroutes GET POST]]
            [ganja-jedi.models.db :as db]
            [clojure.data.json :as json]
            [noir.session :as session]
            [ganja-jedi.util.time :as time]))


;;; Routes

(defroutes news-routes
  (GET "/news" []
       (let [news-posts (db/get-news)]
         (json/write-str (map (fn [news]
                                (assoc news :date
                                       (time/get-sql-string (:date news))))
                              news-posts))))
  (POST "/news" {params :params}
        (let [village (session/get :village)]

          ;; Save the new news item
          (db/save-news (assoc params :author village))

          ;; Return the currently logged in user
          (json/write-str {:author village}))))
