(ns ganja-jedi.ganja
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]
            [ganja-jedi.includes :as inc]))

(defroutes app-routes
  (GET "/" [] (inc/default-layout "public/index.html"))
  (GET "/about" [] (inc/default-layout "public/about.html"))
  (GET "/rules" [] (inc/default-layout "public/rules.html"))
  (GET "/misc" [] (inc/default-layout "public/misc.html"))
  (GET "/register" [] (inc/default-layout "public/register.html"))
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
