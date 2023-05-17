package com.example.pokemonback

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

// TODO make git repo
//
//
//
//
//

import java.sql.Connection
import java.sql.DriverManager

fun getConnection(): Connection {
    val url = "jdbc:postgresql://localhost:5432/Pokedex"
    val username = "postgres"
    val password = "Tennis10"

    return DriverManager.getConnection(url, username, password)
}
fun data() {
    val connection = getConnection()

    try {
        val statement = connection.createStatement()
        val resultSet = statement.executeQuery("SELECT * FROM pokemon")

        val metadata = resultSet.metaData
        val columnCount = metadata.columnCount

        while (resultSet.next()) {
            for (i in 1..columnCount) {
                val columnName = metadata.getColumnName(i)
                val columnValue = resultSet.getString(columnName)

                println("$columnName: $columnValue")
            }
            println()
        }
    } catch (e: Exception) {
        e.printStackTrace()
    } finally {
        connection.close()
    }

}


@SpringBootApplication
class PokemonBackApplication

fun main(args: Array<String>) {
    data()
    runApplication<PokemonBackApplication>(*args)
}

@RestController
class MessageController {
    @GetMapping("/")
    fun index (@RequestParam("id") id:String ) = "Your Id: $id"
}