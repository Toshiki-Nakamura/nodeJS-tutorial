/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnakamur <tnakamur@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 20:23:35 by tnakamur          #+#    #+#             */
/*   Updated: 2021/01/04 22:14:49 by tnakamur         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const { argv } = require('process');

if (process.argv.length < 3) {
	console.error("error: NO arguments");
	process.exit(1);
}

function read_file(arg)
{
	var buff = fs.readFileSync(arg, 'utf-8');
	return buff.toString();
}

var string = read_file(process.argv[2]);

var cnt = 0;
var i = 0;
while (string[i])
{
	if (string[i] == '\n')
		cnt++;
	i++;
}
console.log(cnt);
