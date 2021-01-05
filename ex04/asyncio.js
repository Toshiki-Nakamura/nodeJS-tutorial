/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnakamur <tnakamur@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 21:26:22 by tnakamur          #+#    #+#             */
/*   Updated: 2021/01/05 13:05:30 by tnakamur         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

var buff;
var ans;

if (process.argv.length < 3) {
	console.error("error: NO arguments");
	process.exit(1);
}

function read_file(arg, call) {
	buff = fs.readFile(arg, 'utf-8');
	call(buff.toString());
}

var call_back = function (file_content) {
	ans = file_content.split('\n').length - 1;
	console.log(ans);
}

read_file(process.argv[2], call_back);
