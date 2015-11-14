(ns ganja-jedi.routes.login
  (:require [compojure.core :refer [defroutes GET POST]]
            [ganja-jedi.views.layout :as layout]
            [noir.validation :as val]
            [noir.session :as session]
            [noir.response :refer [redirect]]
            [ganja-jedi.routes.auth :as auth]
            [ganja-jedi.models.db :as db]))

(defn login-user
  "Attempts to login a user"
  [email pass remember]
  (when (and (val/is-email? email)
             (val/has-value? pass))
    (let [user-info (first (db/get-user-info email))]

      ;; Check if the login-password corresponds to the stored one, set session variables
      (when (and (not (nil? user-info))
                 (auth/check-pass (:salt user-info)
                                  pass
                                  (:password user-info)))
        (doseq [[k v] user-info
                :when (not (contains? #{:password :salt :userid} k))]
          (session/put! k v)))))

  ;; Redirect to the home page
  (redirect "/"))

(defroutes login-routes
  (GET "/login" [] (redirect "/"))
  (POST "/login" [login-email login-password remember-user]
        (login-user login-email login-password remember-user))
  (GET "/logout" []
       (session/clear!)
       (redirect "/"))
  (POST "/logout" []
        (session/clear!)
        (redirect "/")))
