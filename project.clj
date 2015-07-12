(defproject ganja-jedi "0.0.1"
  :description "The official site for clan Ganja Jedi"
  :url "http://ganjajedi.com"
  :license {:name "Artistic License 2.0"
            :url "http://opensource.org/licenses/Artistic-2.0"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.3.1"]
                 [ring/ring-core "1.3.2"]
                 [ring/ring-jetty-adapter "1.3.2"]
                 [ring/ring-defaults "0.1.2"]
                 [environ "0.5.0"]]
  :min-lein-version "2.0.0"
  :plugins [[lein-ring "0.8.13"]
            [environ/environ.lein "0.2.1"]]
  :ring {:handler ganja-jedi.ganja/app}
  :hooks [environ.leiningen.hooks]
  :uberjar-name "ganjajedi.jar"
  :profiles {:production {:env {:production true}}
             :dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}})
