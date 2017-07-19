//: [Previous](@previous)

import Foundation
import UIKit

//: If, Else-If Exercise: Triathlon training

// Here is a class to represent the triathlete in training.
class Trainee {
    let name: String
    var canFinishSwim: Bool
    var canFinishBike: Bool
    var canFinishRun: Bool
    
    init(name: String, canFinishSwim: Bool, canFinishBike: Bool, canFinishRun: Bool) {
        self.name = name
        self.canFinishSwim = canFinishSwim
        self.canFinishBike = canFinishBike
        self.canFinishRun = canFinishRun
    }
}

// Here we will instantiate and initialize a couple of trainees.
var athlete1 = Trainee(name: "Kurt", canFinishSwim: false, canFinishBike: true, canFinishRun: true)
var athlete2 = Trainee(name: "Teresa", canFinishSwim: true, canFinishBike: true, canFinishRun: true)

func checkTrainingStatus (triathleteInTraining: Trainee) {
    if !triathleteInTraining.canFinishSwim {
        print("swim more")
    } else if !triathleteInTraining.canFinishBike {
        print("bike more")
    } else if !triathleteInTraining.canFinishRun {
        print("run more")
    } else {
        print("do the tri")
    }
}

checkTrainingStatus(triathleteInTraining: athlete1)
checkTrainingStatus(triathleteInTraining: athlete2)
