<script setup>
const {query} = useRoute()
console.log("Query",query)
try {
  
  const q = await $fetch('/api/guest',{method:"GET",params:{e:query.e}})
  console.log("Data",q)
} catch (error) {
  console.log("Error", error)
}

const update = async () => {
  try {
    const data = await $fetch('/api/update', { method: "POST", body: form })
    console.log("Inviati correttamente", data)
  } catch (error) {
    console.log("Errore ", error)
  }
}
</script>

<template>
  <main>
    <h1>Change</h1>
  </main>
</template>