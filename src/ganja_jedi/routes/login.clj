(ns ganja-jedi.routes.login
  (:require [compojure.core :refer [defroutes GET POST]]
            [ganja-jedi.views.layout :as layout]
            [noir.validation :as val]
            [noir.session :as session]
            [ganja-jedi.routes.auth :as auth]
            [ganja-jedi.models.db :as db]))

(defroutes login-routes
  (POST "/login" [login-email login-password remember-user]
        (when (and (val/is-email? login-email)
                   (val/has-value? login-password))
          (let [user-info (first (db/get-user-info login-email))]
            ;; Check if the login-password corresponds to the stored one, set session variables
            (when (and (not (nil? user-info))
                       (auth/check-pass (:salt user-info)
                                        login-password
                                        (:password user-info)))
              (for [[k v] user-info
                    :when (not (contains? #{:password :salt :userid} k))]
                (do
                  (println k)
                  (session/put! k v))))))
        (println (session/get :village "not here!"))
        (layout/default-layout "public/index.html")))
