//: Playground - noun: a place where people can play

import UIKit

import Foundation

func madLibGenerator(adverb: String, adjective: String, noun: String) -> String{
    return "Whew! I've been " + adverb + "learning how to build " + adjective + "app with Udacity. I hope they can teach me about " + noun + "soon. That would be helpful."
}

madLibGenerator(adverb: "madly", adjective: "new", noun: "heaven")

func madLibGenerator2(adverb: String, adjective: String, noun: String) -> String{
    return "Whew! I've been \(adverb) learning how to build \(adjective) app with Udacity. I hope they can teach me about \(noun) soon. That would be helpful."
}

madLibGenerator2(adverb: "madly", adjective: "new", noun: "heaven")