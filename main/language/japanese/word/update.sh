mysqldump -u maxwell -p913 max kotoba > kotoba.sql
a=`grep -n "^LOCK TABLES" kotoba.sql | cut -d ":" -f 1`
b=`grep -n "UNLOCK TABLES" kotoba.sql | cut -d ":" -f 1`
head=$((a+2)) && tail=$((b-2))
sed -n "$head,$tail p" kotoba.sql > list.js
sed -i 's/VALUES (/\n/g;s/),(/\n/g;s/);//g' list.js
sed -i '1d' list.js
sed -i 's/^/[/g;s/$/],/g' list.js
sed -i '1i\list=[' list.js && echo "]" >> list.js
