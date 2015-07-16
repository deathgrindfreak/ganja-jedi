(ns ganja-jedi.templates
  (:require
   [net.cgrand.enlive-html :as html]))

;;; Messages displayed randomly in the <title></title> elements on page load
(def ^:dynamic *title-messages* ["Unite!" "Go Go Ganja Rangers!"
                                 "Spaced cadets!" "Wake and/or Bake ..."
                                 "VIVA LA GANJA!"])

(defn random-title []
  (*title-messages* (rand-int (count *title-messages*))))
