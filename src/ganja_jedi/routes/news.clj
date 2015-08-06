(ns ganja-jedi.routes.news
  (:require [clojure.string :as str]
            [compojure.core :refer [defroutes GET POST]]
            [ganja-jedi.models.db :as db]
            [clojure.data.json :as json]
            [noir.session :as session]))


;;; Routes

(defroutes news-routes
  (POST "/news" {params :params}
        (let [village (session/get :village)]

          (println (str "params: " params))

          ;; Save the new news item
          (db/save-news (assoc params :author village))

          ;; Return the currently logged in user
          (json/write-str {:author village}))))
