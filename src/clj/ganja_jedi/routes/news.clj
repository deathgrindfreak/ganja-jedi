(ns ganja-jedi.routes.news
  (:require [clojure.string :as str]
            [compojure.core :refer [defroutes GET POST DELETE PUT]]
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
          (json/write-str {:author village})))
  (DELETE "/news" [item]
          ;; Make sure that the author is the same as the one logged in
          (if (= (str/trim (:author item))
                   (session/get :village))
            (let [id (Integer/parseInt (:newsid item))
                  retcode (first (db/delete-news-item id))]
              (if (> retcode 0)
                (json/write-str {:success "success"})
                (json/write-str {:success "failure"})))
            (json/write-str {:success "login"}))))
