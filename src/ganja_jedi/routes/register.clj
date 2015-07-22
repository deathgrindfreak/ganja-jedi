(ns ganja-jedi.routes.register
  (:require [crypto.password.bcrypt :as pass]))

(defn salt
  "Generates a password salt using SecureRandom"
  [bytes]
  (let [rand (java.security.SecureRandom/getInstance "SHA1PRNG")
        buffer (make-array Byte/TYPE bytes)]
    (.nextBytes rand buffer)
    buffer))
