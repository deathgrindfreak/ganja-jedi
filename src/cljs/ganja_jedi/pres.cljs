(ns ganja-jedi.pres
  (:require [ajax.core :as ajax :refer [GET POST]]))

(defn get-news-posts
  "Ajax call for getting news posts"
  []
  (GET "/news"
       {:handler (fn [data]
                   (map (fn [item]
                          )
                        data))
        :error-handler (fn [xhr status error])
        :response-format :json
        :keywords? true}))

