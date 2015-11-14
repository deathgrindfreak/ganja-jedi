(ns ganja-jedi.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :as resp]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-params]]
            [environ.core :refer [env]]
            [ganja-jedi.routes.home :refer [home-routes]]
            [ganja-jedi.routes.register :refer [register-routes]]
            [ganja-jedi.routes.login :refer [login-routes]]
            [ganja-jedi.routes.news :refer [news-routes]]
            [noir.session :as session]
            [noir.validation :refer [wrap-noir-validation]]
            [ring.middleware.session.memory :refer [memory-store]]))

(defroutes app-routes
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

;;; TODO create init and destroy functions
(defn init [])
(defn destroy [])

(def app
  (-> (routes home-routes
              login-routes
              register-routes
              news-routes
              app-routes)

      ;; TODO Need to re-enable after figuring out react
      (wrap-defaults (assoc-in (assoc site-defaults :session false)
                               [:security :anti-forgery] false))

      (session/wrap-noir-session {:store (memory-store)})
      (wrap-json-params)
      (wrap-noir-validation)))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 6666))]
    (jetty/run-jetty (handler/site #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
