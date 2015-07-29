(ns ganja-jedi.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]
            [ganja-jedi.routes.home :refer [home-routes]]
            [ganja-jedi.routes.register :refer [register-routes]]))

(defroutes app-routes
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

;;; TODO create init and destroy functions
(defn init [])
(defn destroy [])

(def app
  (-> (routes home-routes
              register-routes
              app-routes)
      (wrap-defaults site-defaults)))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 6666))]
    (jetty/run-jetty (handler/site #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
