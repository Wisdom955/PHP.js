var php = {
    boolean: false,
    sprintf: function (format, args_array) {
        if (!this.is_array(args_array) ||
            args_array.length < 1) throw "sprint_f expects its second " +
        "parameter to an array";
        if (format.search("%s") < 0) throw "sprint_f expects %s " +
        "as its format argument";
        var i = 0;
        while (args_array.length > 0) {
            if (i >= 100) throw "args_array can't be greater than 100";
            format = format.replace("%s", args_array[0]);
            args_array.shift();
            i++;
        }
        return format;
    },
    ucfirst: function (string) {
        string = string.trim();
        return (string.substring(0, 1).toUpperCase() +
            string.substring(1, string.length));
    },
    lcfirst: function (string) {
        string = string.trim();
        return (string.substring(0, 1).toLowerCase() +
            string.substring(1, string.length));
    },
    ucword: function (string) {
        string = string.trim().split(" ");
        var txt = "";
        while (string.length > 0) {
            txt += this.ucfirst(string[0]) + " ";
            string.shift();
        }
        return txt;
    },
    explode: function (delimiter, string) {
        return (string.split(delimiter));
    },
    implode: function (delimiter, string) {
        return (string.join(delimiter));
    },
    var_dump: function (object) {
        var x, txt = "";
        for (x in object) {
            txt += x + ": " + object[x] + "\n";
        }
        return txt;
    },
    array_intersect: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_intersect expects " +
        "both parameters to an array";
        var x, match = "";
        for (x in array1) {
            var n;
            for (n in array2) {
                if (array1[x] === array2[n]) {
                    match += (match.length > 0 ? "," +
                        array1[x] : array1[x]);
                }
            }
        }
        return match.split(",");
    },
    array_intersect_key: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_intersect_key expects " +
        "both parameters to an array";
        var x, match = "";
        for (x in array1) {
            var n;
            for (n in array2) {
                if (x === n) {
                    match += (match.length > 0 ? "," +
                        array1[x] : array1[x]);
                }
            }
        }
        return match.split(",");
    },
    array_intersect_assoc: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_intersect_assoc expects " +
        "both parameters to an array";
        var x, match = "";
        for (x in array1) {
            var n;
            for (n in array2) {
                if (x === n && array1[x] === array2[n]) {
                    match += (match.length > 0 ? "," +
                        array1[x] : array1[x]);
                }
            }
        }
        return match.split(",");
    },
    array_diff: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_diff expects" +
        " both parameters to an array";
        var x, match = "";
        for (x in array1) {
            var n;
            for (n in array2) {
                if (array1[x] !== array2[n]) {
                    match += (match.length > 0 ? "," +
                        array1[x] : array1[x]);
                }
            }
        }
        return match.split(",");
    },
    array_diff_key: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_diff_key expects" +
        " both parameters to an array";
        var x, match = "";
        for (x in array1) {
            var n;
            for (n in array2) {
                if (x !== n) {
                    match += (match.length > 0 ? "," +
                        array1[x] : array1[x]);
                }
            }
        }
        return match.split(",");
    },
    array_diff_assoc: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_diff_assoc expects" +
        " both parameters to an array";
        var x, match = "";
        for (x in array1) {
            var n;
            for (n in array2) {
                if (x !== n && array1[x] !== array2[n]) {
                    match += (match.length > 0 ? "," +
                        array1[x] : array1[x]);
                }
            }
        }
        return match.split(",");
    },
    array_flip: function (array) {
        if (!this.is_array(array)) throw "array_flip expects an array";
        var x, new_array = [];
        for (x in array) {
            new_array[array[x]] = x;
        }
        return new_array;
    },
    array_keys: function (array) {
        if (!this.is_array(array)) throw "array_keys expects an array";
        var x, new_array = [];
        for (x in array) {
            new_array.push(x);
        }
        return new_array;
    },
    array_values: function (array) {
        if (!this.is_array(array)) throw "array_values expects an array";
        var x, new_array = [];
        for (x in array) {
            new_array.push(array[x]);
        }
        return new_array;
    },
    array_reverse: function (array) {
        if (!this.is_array(array)) throw "array_reverse expects an array";
        return array.reverse();
    },
    array_search: function (array, search) {
        if (!this.is_array(array)) throw "array_search expects" +
        " its first parameter to be an array";
        var x, value = false;
        for (x in array) {
            if (array[x] === search) {
                value = x;
                break;
            }
        }
        return value;
    },
    array_sum: function (array) {
        if (!this.is_array(array)) throw "array_sum expects an array";
        var x, value = 0;
        for (x in array) {
            if (!isNaN(array[x])) {
                value = (value + parseInt(array[x]));
            }
        }
        return value;
    },
    in_array: function (array, search) {
        if (!this.is_array(array)) throw "in_array expects" +
        " its first parameter to be an array";
        var x, value = false;
        for (x in array) {
            if (array[x] === search) {
                value = true;
                break;
            }
        }
        return value;
    },
    array_walk: function (array, function_name) {
        if (!this.is_array(array)) throw "array_walk expects" +
        " its first parameter to be an array";
        var x;
        for (x in array) {
            function_name(array[x], x);
        }
    },
    array_merge: function (array1, array2) {
        if (!this.is_array(array1) || !this.is_array(array2)) throw "array_merge expects" +
        " both parameters to an array";
        return array1.concat(array2);
    },
    array_shuffle: function (array) {
        if (!this.is_array(array)) throw "array_shuffle expects an array";
        var size = array.length;
        for (var i = (size - 1); i >= 0; i--){
            var j = Math.floor((Math.random() * size));
            var random = array[j];
            array[j] = array[i];
            array[i] = random;
        }
        return array;
    },
    str_shuffle: function (string) {
        return this.array_shuffle(string.toString().trim().split("")).join("");
    },
    word_shuffle: function (string) {
        return this.array_shuffle(string.toString().trim().split(" ")).join(" ");
    },
    is_array: function (variable) {
        return variable.constructor.toString().indexOf("Array") > -1;
    },
    is_numeric: function (variable) {
        return (!isNaN(variable));
    },
    time: function () {
        return parseInt((new Date()).getTime() / 1000);
    },
    strtotime: function (string) {
        return ((new Date(string)).toDateString());
    },
    time_ago: function (time) {
        if (!time) return;
        time = time.toString(); //convert time to string
        time = time.replace(/\.\d+/, ""); // remove milliseconds
        time = time.replace(/-/, "/").replace(/-/, "/");
        time = time.replace(/T/, " ").replace(/Z/, " UTC");
        time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
        time = new Date(time * 1000 || time);

        var now = new Date();
        var seconds = ((now.getTime() - time) * .001) >> 0;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var years = days / 365;

        var templates = {
            prefix: "",
            suffix: " ago",
            seconds: "less than a minute",
            minute: "about a minute",
            minutes: "%d minutes",
            hour: "about an hour",
            hours: "about %d hours",
            day: "a day",
            days: "%d days",
            month: "about a month",
            months: "%d months",
            year: "about a year",
            years: "%d years"
        };
        var template = function (t, n) {
            return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
        };

        return templates.prefix + (
            seconds < 45 && template('seconds', seconds) ||
            seconds < 90 && template('minute', 1) ||
            minutes < 45 && template('minutes', minutes) ||
            minutes < 90 && template('hour', 1) ||
            hours < 24 && template('hours', hours) ||
            hours < 42 && template('day', 1) ||
            days < 30 && template('days', days) ||
            days < 45 && template('month', 1) ||
            days < 365 && template('months', days / 30) ||
            years < 1.5 && template('year', 1) ||
            template('years', years)
        ) + templates.suffix;
    },
    preg_replace: function (pattern, replacement, string) {
        return string.replace(pattern, replacement);
    },
    mt_rand: function (min, max) {
        return Math.floor((min + (Math.random() * ((max - min) + 1))));
    },
    number_format: function (number) {
        number = parseInt(number).toString();
        var x, max = 0, format = "";
        if (number.length >= 4) {
            number = this.array_reverse(number.split("")).join("");
            for (x in number) {
                if (max === 3) {
                    format = (number[x] + "," + format);
                    max = 0;
                } else {
                    format = (number[x] + format);
                }
                max++;
            }
        }
        return (format ? format : number.toString());
    },
    empty: function (variable) {
        return (variable === false || variable === null ||
            variable.toString() === "0" ||
            variable.toString() === "");
    },
    intval: function (variable) {
        return parseInt(variable);
    },
    encrypt: function (string) {
        string = string.toString();
        if (this.boolean === false) {
            this.boolean = true;
            //ajax network call
        }
    },
    decrypt: function (string) {
        string = string.toString();
        if (this.boolean === false) {
            this.boolean = true;
            //ajax network call
        }
    }
};