(ns ganja-jedi.views.layout
  (:require [ring.util.response :as resp]
            [ring.util.anti-forgery :refer [anti-forgery-field]]
            [net.cgrand.enlive-html :as html]
            [noir.session :as session]))

;;; Messages displayed randomly in the <title></title> elements on page load

(def ^:dynamic *title-messages* ["Unite!"
                                 "Oh my God!  It's full of stars!"
                                 "Go Go Ganja Rangers!"
                                 "Wake and/or Bake ..."
                                 "Wake up and smell the ganja."
                                 "VIVA LA GANJA!"])

(defn random-title []
  (str "Ganja Jedi: "
       (*title-messages* (rand-int (count *title-messages*)))))


;;; Templates and snippets

(html/defsnippet header "public/includes/header.html" [html/root] []
  [:title] (html/content (random-title)))

(html/defsnippet logged-in "public/includes/logged-in.html" [html/root]
  [village]
  [:.village-button] (html/content village))

(html/defsnippet logged-out "public/includes/logged-out.html" [html/root] []
  identity)

(html/defsnippet navbar "public/includes/navbar.html" [:#navbar-root] []
  [:.login-section] (if-let [village (session/get :village)]
                      (html/content (logged-in village))
                      (html/content (logged-out))))

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
  (println (str "Village: " (session/get :village "Not set!")))
  ((default-template html-src) (header) (navbar) (footer)))
