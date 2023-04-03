/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    if (m > n) {
        let temp = nums1; nums1 = nums2; nums2 = temp;
        let tmp = m; m = n; n = tmp;
      }
      let imin = 0, imax = m, half_len = Math.floor((m + n + 1) / 2);
      while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2), j = half_len - i;
        if(i < imax && nums1[i] < nums2[j - 1]) {
            imin = i + 1;
        }
        else if(i > imin && nums2[j] < nums1[i - 1]) {
            imax = i - 1;
        }
        else {
            let max_left = 0;
            if (i == 0) {
                max_left = nums2[j - 1];
            }
            else if (j == 0) {
                max_left = nums1[i - 1];
            }
            else {
                max_left = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((m + n) % 2 == 1) {
                return max_left;
            }
            let min_right = 0;
            if (i == m) {
                min_right = nums2[j];
            }
            else if (j == n) {
                min_right = nums1[i];
            }
            else {
                min_right = Math.min(nums1[i], nums2[j]);
            }
            return (max_left + min_right) / 2;
        }
    }
};