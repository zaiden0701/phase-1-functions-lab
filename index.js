function distanceFromHqInBlocks(ave){
    if (ave > 42){
        return ave - 42
    }
    else {
        return 42 - ave
    }
}

function distanceFromHqInFeet(ave){
    let blocks = distanceFromHqInBlocks(ave)
    return (blocks * 264)
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        let distance = (start - destination)
        return (distance * 264)
    } 
    else {
        let distance = destination - start
        return (distance * 264)
    }
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start,destination)

    if (feet <= 400){
        return 0
    }
    else if (feet <= 2000){
        return ((feet-400) * 0.02)
    }
    else if (feet <= 2500){
        return (25)
    }
    else if (feet > 2500){
        return 'cannot travel that far'
    }
}
