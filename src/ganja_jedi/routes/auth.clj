(ns ganja-jedi.routes.auth
  (:require [clojure.data.codec.base64 :as b64]
            [clojure.string :as str]
            [crypto.password.bcrypt :as pass]))

;;; Password Hashing

(def ^:dynamic *num-bytes* 43)

(defn gen-salt
  "Generates a password salt using SecureRandom"
  [bytes]
  (let [rand (java.security.SecureRandom/getInstance "SHA1PRNG")
        salt (make-array Byte/TYPE bytes)]
    (.nextBytes rand salt)
    (apply str (map char (b64/encode salt)))))

(defn gen-pass-hash
  "Generates a hashed password and returns the salt and hashed password"
  [password]
  (let [salt (gen-salt *num-bytes*)]
    [salt (pass/encrypt (str salt password))]))

(defn check-pass
  "Checks if a password is equal to the hashed version"
  [salt pass hash]
  (pass/check (str salt (str/trim pass)) hash))

