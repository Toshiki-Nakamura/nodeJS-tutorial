/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnakamur <tnakamur@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 20:23:35 by tnakamur          #+#    #+#             */
/*   Updated: 2020/12/23 21:04:41 by tnakamur         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var fs = require('fs');
const { argv } = require('process');

var fileBuffer = fs.readFileSync(process.argv[2], 'utf-8');
var string = fileBuffer.toString();

var cnt = 0;
var i = 0;
while (string[i])
{
	if (string[i] == '\n')
		cnt++;
	i++;
}
console.log("%s", cnt);
