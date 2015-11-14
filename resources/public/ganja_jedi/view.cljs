(ns ganja-jedi.view
  (:require [reagent.core :as r]))

(enable-console-print!)

;;; Atom for news box state
(def news-item (r/atom {}))


(defn news-box
  "News box for posting new news item"
  []
  (let [hide-modal (fn [e])
        form-onsubmit (fn [])
        title-change (fn [])
        textarea-change (fn [])]
    [:div.modal.fade#news-modal
     [:div.modal-dialog
      [:div.modal-content
       [:div.news-form-box
        [:div
         [:button.close-button {:type "button"
                                :on-click hide-modal
                                :data-dismiss "modal"
                                :aria-label "Close"}
          [:span {:aria-hidden "true"} "&times;"]]]

        [:div.modal-body
         [:div.news-form-box-title
          [:h3.modal-title "New News Item"]]

         [:form {:on-submit form-onsubmit}
          [:div.inputGroup
           [:label {:html-for "title"} "Title:"]
           [:input.form-control {:name "title"
                                 :on-change title-change
                                 :value (:title @news-state)
                                 :placeholder "Title"}]]
          [:div.inputGroup
           [:text-area.form-control.news-area
            {:name "body"
             :on-change textarea-change
             :value (:body @news-state)
             :rows "10"
             :placeholder "Message ..."}]]
          [:div.right-button-wrapper
           [:div.right-button
            [:button.btn.news-btn.orange-btn "Submit"]]]]]]]]
     [news-list (:items @news-state)]]))

(defn news-list
  [items]
  (let [create-news-item (fn [item]
                           [:div.news-section
                            [:div
                             [:button.close-button.news-delete {:on-click handle-delete
                                                                :aria-label "Close"}
                              [:span {:aria-hidden "true"} "&times;"]]
                             [:h3 (:title item)]]
                            [:div.news-content
                             [:div {:dangerouslySetInnerHtml "TODO"}]
                             [:br]
                             [:p (:author item)]
                             [:p (:date item)]]])]
    [:div (map create-news-item items)]))

(defn render-newsbox []
  (r/render-component
   [news-box]
   (.getElementById js/document "news-box")))
