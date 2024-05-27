export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")

export const rand = (limit, start = 1) => {
    return start = Math.floor(Math.random() * (limit - start))
}

canvas.width = innerWidth - 15
canvas.height = innerHeight - 20

canvas.style.backgroundColor = "#d6f9ff"
