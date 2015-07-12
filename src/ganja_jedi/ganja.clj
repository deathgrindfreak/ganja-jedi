(ns ganja-jedi.ganja
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]))

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Chris!!!!!!!!!!!"})

(defroutes app-routes
  (GET "/" []
       (splash))
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(def app
  (wrap-defaults app-routes site-defaults))

;; (defn -main [& [port]]
;;   (let [port (Integer. (or port (env :port) 6666))]
;;     (jetty/run-jetty (handler/site #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
