(ns ganja-jedi.views.layout
  (:require [ring.util.response :as resp]
            [net.cgrand.enlive-html :as html]))

;;; Messages displayed randomly in the <title></title> elements on page load
(def ^:dynamic *title-messages* ["Unite!" "Go Go Ganja Rangers!"
                                 "Wake and/or Bake ..."
                                 "VIVA LA GANJA!"])

(defn random-title []
  (str "Ganja Jedi: "
       (*title-messages* (rand-int (count *title-messages*)))))

;;; Render html
(defn render [t]
  (apply str t))

(def render-to-response
  (comp resp/response render))

(defn render-snippet [snp]
  (apply str (html/emit* snp)))


;;; Templates and snippets
(html/defsnippet header "public/includes/header.html" [html/root] []
  [:title] (html/content (random-title)))

(html/defsnippet navbar "public/includes/navbar.html" [:#navbar-root] []
  identity)

(html/defsnippet footer "public/includes/footer.html" [html/root] []
  identity)

(defn default-template [html-src]
  (html/deftemplate layout html-src [header navbar footer]
    [:head] (html/content header)
    [:#navbar-root] (html/content navbar)
    [:footer] (html/content footer)))

(defn default-layout [html-src]
  ((default-template html-src) (header) (navbar) (footer)))

;; (defn register-template [params]
;;   (let [{} params]
;;     (if ()
;;       (default-template "public/index.html")
;;       (default-template "public/register.html"))))

(defn register-layout [params]
  (print params)
  (default-layout "public/register.html"))
