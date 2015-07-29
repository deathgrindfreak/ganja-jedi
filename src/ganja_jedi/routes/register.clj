(ns ganja-jedi.routes.register
  (:require [compojure.core :refer :all]
            [ganja-jedi.models.db :as db]
            [ganja-jedi.views.layout :as layout]
            [ganja-jedi.views.register :as register]))


(defn validate-registration
  "Validates the parameters passed in during registration"
  [params]
  )

;;; Routes

(defroutes register-routes
  (GET "/register" [] (layout/default-layout "public/register.html"))
  (POST "/register" request (register/register-layout (:params request))))
