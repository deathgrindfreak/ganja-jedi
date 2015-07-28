(ns ganja-jedi.routes.register
  (:require [compojure.core :refer :all]
            ;[ganja-jedi.models.register :as db]
            [ganja-jedi.layout :as layout]))

;;; HTML

(defn register-layout [params]
  (let [{:keys [status email village pass message]} params]
    (println params)
    (if (some #(nil? %) (vals params))
      (layout/default-layout "public/register.html")
      (layout/default-layout "public/register.html"))))


;;; Routes

(defroutes register-routes
  (GET "/register" [] (layout/default-layout "public/register.html"))
  (POST "/register" request (register-layout (:params request))))
