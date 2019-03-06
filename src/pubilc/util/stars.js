function stars(score) {
    let star;
    if (score == 0) {
        star = 'no-star';
    } else if (score == 1) {
        star = 'one-star';
    } else if (score == 2) {
        star = 'two-star';
    } else if (score == 3) {
        star = 'three-star';
    } else if (score == 4) {
        star = 'four-star';
    } else if (score == 5) {
        star = 'five-star';
    }
    return star;
}
export default stars