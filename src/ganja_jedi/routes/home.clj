(ns ganja-jedi.routes.home
  (:require [compojure.core :refer :all]
            [ganja-jedi.views.layout :as layout]))

(defroutes home-routes
  (GET "/" [] (layout/default-layout "public/index.html"))
  (GET "/about" [] (layout/default-layout "public/about.html"))
  (GET "/rules" [] (layout/default-layout "public/rules.html"))
  (GET "/misc" [] (layout/default-layout "public/misc.html")))
