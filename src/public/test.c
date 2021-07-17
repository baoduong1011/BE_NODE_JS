int test(int x , int y) {
    int val = x;
    if(x < -3) {
        if(x > y) {
            val = x * y;
        }
        else {
            val = x + y;
        }
    }
    else {
        if(x <= 2) {
            val = x ^ y;
        }
        else {
            val = x - y;
        }
    }
}   
// x = 4 , y = 2 => val = 2;
// x = 1 , y = 9 => val = 8;