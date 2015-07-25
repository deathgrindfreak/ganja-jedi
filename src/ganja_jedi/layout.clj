(ns ganja-jedi.layout
  (:require [ring.util.response :as resp]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [net.cgrand.enlive-html :as html]))

;;; Messages displayed randomly in the <title></title> elements on page load
(def ^:dynamic *title-messages* ["Unite!"
                                 "Go Go Ganja Rangers!"
                                 "Wake and/or Bake ..."
                                 "VIVA LA GANJA!"])

(defn random-title []
  (str "Ganja Jedi: "
       (*title-messages* (rand-int (count *title-messages*)))))

;;; Templates and snippets

(html/defsnippet header "public/includes/header.html" [html/root] []
  [:title] (html/content (random-title)))

(html/defsnippet navbar "public/includes/navbar.html" [:#navbar-root] []
  identity)

(html/defsnippet footer "public/includes/footer.html" [html/root] []
  identity)

(defn default-template
  "Default template for the page (also adds CSRF anti-forgery hidden input)"
  [html-src]
  (html/deftemplate layout html-src [header navbar footer]
    [:head] (html/content header)
    [:#navbar-root] (html/content navbar)
    [:footer] (html/content footer)
    [:form] (html/append (-> (anti-forgery-field)
                             java.io.StringReader.
                             html/html-resource))))

(defn default-layout [html-src]
  ((default-template html-src) (header) (navbar) (footer)))
