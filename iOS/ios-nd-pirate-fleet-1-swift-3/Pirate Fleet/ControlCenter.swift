//
//  ControlCenter.swift
//  Pirate Fleet
//
//  Created by Jarrod Parkes on 9/2/15.
//  Copyright © 2015 Udacity. All rights reserved.
//

struct GridLocation {
    let x: Int
    let y: Int
}

struct Ship {
    let length: Int
    let location: GridLocation
    let isVertical: Bool
}

struct Mine: _Mine_ {
    let location: GridLocation
    let explosionText: String
}

class ControlCenter {
    
    func addShipsAndMines(_ human: Human) {
        let smallShip = Ship(length: 2, location: GridLocation(x: 3, y: 0), isVertical: true)
        let mediumShip1 = Ship(length: 3, location: GridLocation(x: 0,y: 0), isVertical: false)
        let mediumShip2 = Ship(length: 3, location: GridLocation(x: 3,y: 3), isVertical: true)
        let largeShip = Ship(length: 4, location: GridLocation(x: 7, y: 4), isVertical: true)
        let xLargeShip = Ship(length: 5, location: GridLocation(x: 1,y: 7), isVertical: false)
        
        let mine1 = Mine(location: GridLocation(x: 5, y: 4), explosionText: "you hit a mine")
        let mine2 = Mine(location: GridLocation(x: 7, y: 1), explosionText: "a mine just exploded")
        
        human.addShipToGrid(smallShip)
        human.addShipToGrid(mediumShip1)
        human.addShipToGrid(mediumShip2)
        human.addShipToGrid(largeShip)
        human.addShipToGrid(xLargeShip)
        
        human.addMineToGrid(mine1)
        human.addMineToGrid(mine2)
    }
    
    func calculateFinalScore(_ gameStats: GameStats) -> Int {
        
        var finalScore: Int
        
        finalScore = (gameStats.enemyShipsRemaining * gameStats.shipBonus) + (gameStats.humanShipsSunk * gameStats.sinkBonus) - ((gameStats.numberOfHitsOnEnemy + gameStats.numberOfMissesByHuman) * gameStats.guessPenalty)
        print("the value of final score is \(finalScore)")
        return finalScore
    }
}

