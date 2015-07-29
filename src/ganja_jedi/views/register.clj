(ns ganja-jedi.views.register
  (:require [ganja-jedi.views.layout :as layout]))

(defn register-layout [params]
  (let [{:keys [status email village pass message]} params]
    (println (str "status: " status
                  " email: " email
                  " village: " village
                  " pass: " pass
                  " message: " message))
    (if (some #(nil? %) (vals params))
      (layout/default-layout "public/register.html")
      (layout/default-layout "public/register.html"))))

