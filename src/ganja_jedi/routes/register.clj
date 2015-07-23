(ns ganja-jedi.routes.register
  (:require [crypto.password.bcrypt :as pass]))

(def ^:dynamic *num-bytes* 32)

(defn gen-salt
  "Generates a password salt using SecureRandom"
  [bytes]
  (let [rand (java.security.SecureRandom/getInstance "SHA1PRNG")
        buffer (make-array Byte/TYPE bytes)]
    (.nextBytes rand buffer)
    (apply str (map char buffer))))

(defn gen-pass-hash
  "Generates a hashed password"
  [pass]
  (let [salt (gen-salt *num-bytes*)]
    ))
