/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tnakamur <tnakamur@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/23 20:08:02 by tnakamur          #+#    #+#             */
/*   Updated: 2020/12/23 20:19:35 by tnakamur         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var sum;
var i;

sum = 0;
i = 2;
while (i < process.argv.length)
{
	sum += parseInt(process.argv[i++]);
}
console.log("%s", sum);
