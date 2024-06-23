export interface Seat {
  id: string;
  available: boolean;
}

export const Seats: Seat[] = [];

for (let row = "A".charCodeAt(0); row <= "J".charCodeAt(0); row++) {
  for (let col = 2; col <= 13; col++) {
    const seatId = String.fromCharCode(row) + col;
    const isAvailable = Math.random() < 0.9;
    const seat: Seat = { id: seatId, available: isAvailable };
    Seats.push(seat);
  }
}
