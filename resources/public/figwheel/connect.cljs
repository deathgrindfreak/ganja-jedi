(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "ganja-fig", :websocket-url "ws://localhost:3449/figwheel-ws"})

