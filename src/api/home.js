import {request} from 'utils/request'

export function getCarouselList() {
    const url = "http://localhost:8080/getCarouselList"
    return request(url)
}

export function getComboList() {
    const url = "http://localhost:8080/getComboList"
    return request(url)
}

export function getConsulTation() {
    const url = "http://localhost:8080/getConsulTation"
    return request(url)
}

