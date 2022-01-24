/**
 * 912. 排序数组 https://leetcode-cn.com/problems/sort-an-array/
 */
var sortArray = function (nums) {
	return mergeSort(nums, 0, nums.length - 1)
};

var mergeSort = function (nums, left, right) {
	//如果左边下标等于右边下标，说明已经不能再拆分，返回[nums[left]]
	if (left === right) return [nums[left]]

	//左边加右边右移1位得到中间位置
	const mid = (left + right) >> 1

	//将左边部分进行排序
	const leftArr = mergeSort(nums, left, mid)

	//将右边部分进行排序
	const rightArr = mergeSort(nums, mid + 1, right)

	//最后合并左边和右边排序的结果
	return merge(leftArr, rightArr)
};

var merge = function (left, right) {
	const ans = []
	let i = j = 0
	let llen = left.length
	let rlen = right.length

	//对左右两个数组进行线性合并
	while (i < llen && j < rlen) {
		if (left[i] <= right[j]) {
			ans.push(left[i++])
		} else {
			ans.push(right[j++])
		}
	}

	//如果左边还没合并完，则把剩下的部分继续合并到结果中
	while (i < llen) {
		ans.push(left[i++])
	}

	//如果右边还没合并完，则把剩下的部分继续合并到结果中
	while (j < rlen) {
		ans.push(right[j++])
	}

	return ans
};

console.log(sortArray([2, 0, 2, 1, 1, 0]))