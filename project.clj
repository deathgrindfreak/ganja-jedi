(defproject ganja-jedi "0.0.1"
  :description "The official site for clan Ganja Jedi"
  :url "http://ganjajedi.com"
  :license {:name "Artistic License 2.0"
            :url "http://opensource.org/licenses/Artistic-2.0"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [cljs-ajax "0.5.0"]
                 [com.andrewmcveigh/cljs-time "0.3.13"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.12"]
                 [compojure "1.3.4"]
                 [ring/ring-core "1.3.2"]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [ring/ring-defaults "0.1.2"]
                 [ring/ring-json "0.4.0"]
                 [enlive "1.1.6"]
                 [environ "0.5.0"]
                 [org.clojure/java.jdbc "0.3.5"]
                 [postgresql "9.1-901-1.jdbc4"]
                 [crypto-password "0.1.3"]
                 [org.clojure/data.codec "0.1.0"]
                 [lib-noir "0.9.9"]
                 [clj-time "0.8.0"]
                 [org.clojure/data.json "0.2.6"]]
  :source-paths ["src/clj"]
  :min-lein-version "2.0.0"
  :plugins [[lein-ring "0.8.13"]
            [environ/environ.lein "0.2.1"]
            [lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.1"]]
  :ring {:handler ganja-jedi.handler/app
         :init    ganja-jedi.handler/init
         :destroy ganja-jedi.handler/destroy}
  :hooks [environ.leiningen.hooks]
  :uberjar-name "ganjajedi.jar"
  :repl-options {:timeout 120000}
  :profiles {:production {:env {:production true}}
             :dev {:defaults [:base :system :user :provided :dev :local-dev]
                   :dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}
  :cljsbuild {:builds [{:id "ganja-fig"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:output-dir "resources/public"
                                   :output-to "resources/public/ganja.js"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map "resources/public/ganja.js.map"}}
                       {:id "ganja"
                        :source-paths ["src/cljs"]
                        :compiler {:output-dir "resources/public"
                                   :output-to "resources/public/ganja.js"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   :source-map "resources/public/ganja.js.map"}}]})
