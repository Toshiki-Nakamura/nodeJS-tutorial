/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnakamur <tnakamur@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:26:22 by tnakamur          #+#    #+#             */
/*   Updated: 2020/12/23 22:29:44 by tnakamur         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

var buff;
var ans;

function read_file(arg, call) {
	buff = fs.readFileSync(arg, 'utf-8');
	call(buff.toString());
}

var call_back = function (file_content) {
	ans = file_content.split('\n').length - 1;
	console.log(ans);
}

read_file(process.argv[2], call_back);
