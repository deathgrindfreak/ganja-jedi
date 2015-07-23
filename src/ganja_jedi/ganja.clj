(ns ganja-jedi.ganja
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]
            [ganja-jedi.layout :as layout]))

(defroutes app-routes
  (GET "/" [] (layout/default-layout "public/index.html"))
  (GET "/about" [] (layout/default-layout "public/about.html"))
  (GET "/rules" [] (layout/default-layout "public/rules.html"))
  (GET "/misc" [] (layout/default-layout "public/misc.html"))
  (GET "/register" {params :params} (layout/register-layout params))
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(def app
  (wrap-defaults app-routes site-defaults))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 6666))]
    (jetty/run-jetty (handler/site #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
