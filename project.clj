(defproject ganja-jedi "0.0.1"
  :description "The official site for clan Ganja Jedi"
  :url "http://ganjajedi.com"
  :license {:name "Artistic License 2.0"
            :url "http://opensource.org/licenses/Artistic-2.0"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [ring/ring-jetty-adapter "1.2.2"]
                 [environ "0.5.0"]]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.2.1"]]
  :hooks [environ.leiningen.hooks]
  :uberjar-name "ganjajedi.jar"
  :profiles {:production {:env {:production true}}})
