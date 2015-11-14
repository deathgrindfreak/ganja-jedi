(ns ganja-jedi.routes.register
  (:require [clojure.string :as str]
            [compojure.core :refer [defroutes GET POST]]
            [ganja-jedi.models.db :as db]
            [ganja-jedi.views.layout :as layout]
            [ganja-jedi.views.register :as register]
            [noir.response :refer [redirect]]
            [noir.validation :as val]))


(defn register-user
  "Registers the user for the site"
  [status email village pass]
  (when (and (val/has-value? status)
             (val/is-email? email)
             (val/has-value? village)
             (val/has-value? pass))
    (let [stat (str/trim status)
          user-map {:enabled true
                    :admin (= stat "admin")
                    :email (str/trim email)
                    :village (str/trim village)
                    :elder (= stat "elder")
                    :coleader (= stat "coleader")
                    :leader (= stat "coleader")
                    :password pass}]
      (db/register-user user-map))))


;;; Routes

(defroutes register-routes
  (GET "/register" [] (layout/default-layout "public/register.html"))
  (POST "/register" [status email village pass message]
        (register-user status email village pass)
        (redirect "/")))
