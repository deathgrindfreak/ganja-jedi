(ns ganja-jedi.includes
  (:require
   [net.cgrand.enlive-html :as html]))

;;; Messages displayed randomly in the <title></title> elements on page load
(def ^:dynamic *title-messages* ["Unite!" "Go Go Ganja Rangers!"
                                 "Wake and/or Bake ..."
                                 "VIVA LA GANJA!"])

(defn random-title []
  (*title-messages* (rand-int (count *title-messages*))))

;;; Render html
(defn render [t]
  (apply str t))

(def render-to-response
  (comp response render))

(defn render-snippet [snp]
  (apply str (emit* snp)))


;;; Templates and snippets
(html/defsnippet header "public/includes/header.html" [html/root] []
  [:title] (html/content (random-title)))

(html/defsnippet navbar "public/includes/navbar.html" [:#navbar-root] []
  identity)

(html/defsnippet footer "public/includes/footer.html" [html/root] []
  identity)

(defn default-layout [html-src]
  (html/deftemplate layout html-src [header navbar footer]
    [:head] (html/content header)
    [:#navbar-root] (html/content navbar)
    [:footer] (html/content footer))
  (render-snippet (layout (header) (navbar) (footer))))